import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./formInput.scss";
import { useTranslation } from "react-i18next";

type FileData = {
    file: File;
    preview: string | null;
};

type Props = {
    files: File[];
    setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function MultiDropzoneForm({ files, setFormData }: Props) {
    const { t } = useTranslation();

    const [previewFiles, setPreviewFiles] = React.useState<FileData[]>([]);
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    // ✅ validate files (images + pdf only)
    const isValidFile = (file: File) => {
        return (
            file.type.startsWith("image/") ||
            file.type === "application/pdf"
        );
    };

    // ✅ handle select / drop files
    const handleFileSelect = (selectedFiles: FileList | File[]) => {
        const validFiles = Array.from(selectedFiles).filter(isValidFile);

        const newFiles: FileData[] = validFiles.map((file) => ({
            file,
            preview: file.type.startsWith("image/")
                ? URL.createObjectURL(file)
                : null,
        }));

        // UI preview
        setPreviewFiles((prev) => [...prev, ...newFiles]);

        // form state (important for submit)
        setFormData((prev: any) => ({
            ...prev,
            files: [...prev.files, ...validFiles],
        }));
    };

    // ✅ remove file
    const handleRemove = (index: number) => {
        setPreviewFiles((prev) => {
            const removed = prev[index];
            if (removed?.preview) URL.revokeObjectURL(removed.preview);
            return prev.filter((_, i) => i !== index);
        });

        setFormData((prev: any) => ({
            ...prev,
            files: prev.files.filter((_: File, i: number) => i !== index),
        }));
    };

    // ✅ drag & drop
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        handleFileSelect(e.dataTransfer.files);
    };

    return (
        <Box
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => inputRef.current?.click()}
            sx={{
                border: "2px dashed grey",
                borderRadius: "16px",
                p: 4,
                textAlign: "center",
                mx: "auto",
                cursor: "pointer",
                minHeight: "160px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
            className="dropzone-form"
        >
            {/* Empty state */}
            {previewFiles.length === 0 && (
                <Typography color="text.secondary">
                    {t("request.Drag") || "Drag & drop PDF or Images here"}
                </Typography>
            )}

            {/* Preview */}
            {previewFiles.length > 0 && (
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        justifyContent: "center",
                    }}
                >
                    {previewFiles.map((f, i) => (
                        <Box
                            key={i}
                            sx={{
                                position: "relative",
                                width: 100,
                                height: 100,
                                border: "1px solid #ddd",
                                borderRadius: 2,
                                overflow: "hidden",
                                background: "#fff",
                            }}
                        >
                            {/* Image */}
                            {f.preview ? (
                                <img
                                    src={f.preview}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            ) : (
                                // PDF icon
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                    }}
                                >
                                    <PictureAsPdfIcon
                                        fontSize="large"
                                        color="error"
                                    />
                                </Box>
                            )}

                            {/* remove button */}
                            <IconButton
                                size="small"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemove(i);
                                }}
                                sx={{
                                    position: "absolute",
                                    top: 2,
                                    right: 2,
                                    bgcolor: "rgba(255,255,255,0.8)",
                                }}
                            >
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </Box>
                    ))}
                </Box>
            )}

            {/* hidden input */}
            <input
                ref={inputRef}
                type="file"
                multiple
                style={{ display: "none" }}
                onChange={(e) => {
                    if (!e.target.files) return;
                    handleFileSelect(e.target.files);
                }}
                accept="image/*,application/pdf"
            />
        </Box>
    );
}