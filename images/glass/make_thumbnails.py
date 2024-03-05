from PIL import Image
import glob, os

max_width = 300.

for infile in glob.glob("*.jpg"):
		file, ext = os.path.splitext(infile)
		im = Image.open(infile)
		if im.width > max_width:
			height = max_width * im.height / im.width
			new_size = max_width, height
			im.thumbnail(new_size)
			print file
			print new_size
			im.save(file + ".jpg", "JPEG")
