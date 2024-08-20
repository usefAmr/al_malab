import multer from "multer";

export const fileValidation = {
    image: ['image/png', 'image/jpg', 'image/jpeg', 'image/jfif'],
    file:['application/pdf']
};

export function fileUpload(customValidation = []) {
    const storage = multer.diskStorage({});
    
    function fileFilter(req, file, cb) {
        if (fileValidation.image.includes(file.mimetype) || customValidation.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid format'), false);
        }
    }

    const upload = multer({ fileFilter, storage });
    return upload;
}
