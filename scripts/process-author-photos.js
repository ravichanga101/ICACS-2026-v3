const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const sourceDir = "public/assets/img/authors-photo";
const outputDir = "public/assets/img/authors-photo/optimized";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Paper ID -> source photo filename (verified against presentationSchedule.json
// authors + co-author names so each presenting author gets their own photo).
const paperPhotoMap = {
  219: "Meet_Kamlesh_Raval_photo - Meet Raval.png",
  577: "Profile Pic_1 - Neha Minocha.jpeg",
  142: "JPvanDeventer - JP van Deventer.png",
  430: "IMG-20250924-WA0010 - Narendrasinh Limbad.jpg",
  502: "Pankaj Chandre - Rahul More.jpg",
  155: "ashish_gor - Ashish K. Gor.jpg",
  484: "Mitesh_Vyas - Mitesh Vyas.png",
  501: "Updated RPM Photo - Rahul More.png",

  338: "WhatsApp Image 2026-10-27 at 12.08.11 PM - boopathy skb.jpeg",
  73: "harsh photo - 2026 - Harsh Patel.jpeg",
  467: "Arpita - Riddhi Doshi.jpeg",
  188: "passport-min - Monika Chauhan.jpeg",
  617: "DocScanner 28 Oct 2026 06-22 pm_1 - Dharmishtha Makwana.jpeg",
  409: "294A1853 - Yogesh K Kushwah.JPG",
  453: "SSP_Photo-2 - Shaktisinh Parmar.jpg",

  141: "JPvanDeventer - JP van Deventer.png",
  425: "SRB-PIC50KB - Sanjay Bhalgama.jpg",
  660: "IMG_9014 - Dev Pathak.JPG",
  596: "IMG_0907 - Ani Grigoryan.jpeg",
  693: "Bhaskar Photo 2024 - Bhaskar Pandya.jpg",
  638: "1753854932278 - Soni Drashti.jpg",
  600: "Dr.Bela Shrimali - Bela Shrimali.jpg",
  353: "bhailal limbasiya - bhailal limbasiya.png",

  358: "Dr. Amrutha for web - AMRUTHA S.jpg",
  571: "Photo.jpg - Dr. Manikandan Chinnusami.jpeg",

  499: "Updated RPM Photo - Rahul More.png",
  179: "PKS PHOTO - Pratima Shah.jpg",
  340: "Kanak - Riddhi Doshi.jpeg",
  503: "Swapnil Patil - Rahul More.jpeg",
  422: "3 2x2 White BG Photo - Waleed Raza.jpg",
  585: "My Photo - Dr. Amit Choksi.jpg",
  663: "file_00000000c9e47207b817f1f89c0bfbfc - Sundaresh K.png",

  278: "NIRPEX (2) - Nirpex Patel.jpg",
  510: "DSC_0388 - Bhoomi Bangoria.jpg",
  582: "passport-photo - Ms. Zarana Gajjar.jpg",
  640: "Recent_Rupal_Photo - Dr Rupal Kapdi.JPG",
  586: "IMG_0136 - Dr. KP Mredula.JPG",
  513: "IMG-20261105-WA0001 - Dr Rajdipsinh Vaghela.jpg",

  512: "Ravirajsinh Chauhan Passport size photo - Ravirajsinh Chauhan.jpg",
};

const SIZE = 320;

(async () => {
  const entries = Object.entries(paperPhotoMap);
  let ok = 0;
  let failed = [];
  for (const [paperId, fileName] of entries) {
    const inputPath = path.join(sourceDir, fileName);
    const outputPath = path.join(outputDir, `paper-${paperId}.jpg`);
    try {
      await sharp(inputPath)
        .rotate() // apply EXIF orientation
        .resize(SIZE, SIZE, { fit: "cover", position: "attention" })
        .jpeg({ quality: 85, mozjpeg: true })
        .toFile(outputPath);
      ok++;
    } catch (err) {
      failed.push([paperId, fileName, err.message]);
    }
  }
  console.log(`Processed ${ok}/${entries.length} photos.`);
  if (failed.length) {
    console.log("Failed:");
    failed.forEach(([id, f, msg]) => console.log(` - ${id} (${f}): ${msg}`));
  }
})();
