import cloudinary from "../config/cloudinary";

export const uploadImageToCloudinary = async (image: File): Promise<string> => {
  console.log("aaaaaaaa=", image);
  try {
    // Convert File to base64
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = `data:${image.type};base64,${buffer.toString(
      "base64"
    )}`;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(base64Image, {
      folder: "food-images",
    });

    return result.secure_url;
  } catch (error) {
    console.log("Cloudinary Upload Error:", error);
    throw new Error("Failed to upload image to Cloudinary");
  }
};
