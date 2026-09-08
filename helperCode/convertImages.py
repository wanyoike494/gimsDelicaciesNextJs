import os
import sys
from PIL import Image

MAX_DIMENSION = 1200
JPEG_QUALITY = 82

TARGET_DIRS = [
    r"c:\Users\DELL\Documents\GitHubMain\gimsBakery\public\assets",
    r"c:\Users\DELL\Documents\GitHubMain\gimsBakery\htmlVersion\assets"
]

SUPPORTED_EXTS = {'.jpg', '.jpeg', '.png', '.jfif', '.webp'}

def optimize_image(filepath):
    orig_size = os.path.getsize(filepath)
    ext = os.path.splitext(filepath)[1].lower()

    if ext not in SUPPORTED_EXTS:
        return 0, 0

    try:
        with Image.open(filepath) as img:
            # Preserve orientation metadata if present
            try:
                from PIL import ImageOps
                img = ImageOps.exif_transpose(img)
            except Exception:
                pass

            w, h = img.size
            resized = False

            if max(w, h) > MAX_DIMENSION:
                ratio = MAX_DIMENSION / float(max(w, h))
                new_w = max(1, int(w * ratio))
                new_h = max(1, int(h * ratio))
                img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
                resized = True

            # Save in place
            if ext in {'.jpg', '.jpeg', '.jfif'}:
                if img.mode in ('RGBA', 'LA', 'P'):
                    img = img.convert('RGB')
                img.save(filepath, format='JPEG', quality=JPEG_QUALITY, optimize=True, progressive=True)
            elif ext == '.png':
                if img.mode == 'P':
                    img = img.convert('RGBA')
                img.save(filepath, format='PNG', optimize=True)
            elif ext == '.webp':
                img.save(filepath, format='WEBP', quality=JPEG_QUALITY, method=6)
            else:
                return 0, 0

        new_size = os.path.getsize(filepath)
        saved = orig_size - new_size
        return orig_size, new_size
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return 0, 0

def main():
    total_orig = 0
    total_new = 0
    file_count = 0

    for target_dir in TARGET_DIRS:
        if not os.path.exists(target_dir):
            print(f"Directory not found: {target_dir}")
            continue

        print(f"\nProcessing directory: {target_dir}")
        for root, _, files in os.walk(target_dir):
            for file in files:
                ext = os.path.splitext(file)[1].lower()
                if ext in SUPPORTED_EXTS:
                    full_path = os.path.join(root, file)
                    orig, new = optimize_image(full_path)
                    if orig > 0:
                        file_count += 1
                        total_orig += orig
                        total_new += new
                        saved_pct = ((orig - new) / orig) * 100 if orig > 0 else 0
                        print(f"Optimized [{file}]: {orig/1024:.1f} KB -> {new/1024:.1f} KB ({saved_pct:.1f}% reduced)")

    total_saved = total_orig - total_new
    print("\n" + "=" * 50)
    print(f"Total files processed: {file_count}")
    print(f"Original total size:   {total_orig / (1024 * 1024):.2f} MB")
    print(f"Optimized total size:  {total_new / (1024 * 1024):.2f} MB")
    print(f"Total space saved:     {total_saved / (1024 * 1024):.2f} MB ({((total_orig - total_new)/total_orig*100) if total_orig else 0:.1f}%)")
    print("=" * 50)

if __name__ == "__main__":
    main()
