import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./formInput.scss";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

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

    const MAX_FILES = 2;

    const handleFileSelect = (selectedFiles: FileList | File[]) => {
        const validFiles = Array.from(selectedFiles).filter(isValidFile);

        const remainingSlots = MAX_FILES - previewFiles.length;

        if (previewFiles.length >= MAX_FILES) {
            toast.error("Max 2 files allowed");
            return;
        }

        const filesToAdd = validFiles.slice(0, remainingSlots);

        const newFiles: FileData[] = filesToAdd.map((file) => ({
            file,
            preview: file.type.startsWith("image/")
                ? URL.createObjectURL(file)
                : null,
        }));

        setPreviewFiles((prev) => [...prev, ...newFiles]);

        setFormData((prev: any) => ({
            ...prev,
            files: [...prev.files, ...filesToAdd],
        }));

        if (validFiles.length > remainingSlots) {
            toast.error("You can only upload 2 files max");
        }
    };

    // ✅ remove file
    const handleRemove = (index: number) => {
        setPreviewFiles((prev) => {
            const removed = prev[index];

            if (removed?.preview) {
                URL.revokeObjectURL(removed.preview);
            }

            const updated = prev.filter((_, i) => i !== index);

            setFormData((formPrev: any) => ({
                ...formPrev,
                files: updated.map((f) => f.file),
            }));

            return updated;
        });
    };

    // ✅ drag & drop
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        if (previewFiles.length >= MAX_FILES) {
            toast.error("Max 2 files allowed");
            return;
        }

        handleFileSelect(e.dataTransfer.files);
    };

    return (
        <Box
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => {
                if (previewFiles.length >= 2) return;
                inputRef.current?.click();
            }}
            sx={{
                border: previewFiles.length >= 2 ? "2px dashed red" : "2px dashed blue",                borderRadius: "16px",
                p: 2,
                textAlign: "center",
                mx: "auto",
                cursor: previewFiles.length >= 2 ? "not-allowed" : "pointer",
                opacity: previewFiles.length >= 2 ? 0.6 : 1,
                // pointerEvents: previewFiles.length >= 2 ? "none" : "auto",
                minHeight: "120px",
                minWidth: "350px",
                width: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
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
                                    bgcolor: "rgb(73,71,71)",
                                    color: "white",
                                    "&:hover": {
                                        bgcolor: "rgb(100,98,98)",
                                    },
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