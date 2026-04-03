import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./formInput.scss";

type FileData = {
    file: File;
    preview: string | null;
};

export default function MultiDropzoneForm() {
    const [files, setFiles] = React.useState<FileData[]>([]);
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const handleFileSelect = (selectedFiles: FileList | File[]) => {
        const newFiles: FileData[] = Array.from(selectedFiles).map((file) => ({
            file,
            preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
        }));
        setFiles((prev) => [...prev, ...newFiles]);
    };

    const handleRemove = (index: number) => {
        setFiles((prev) => {
            const removed = prev[index];
            if (removed.preview) URL.revokeObjectURL(removed.preview);
            return prev.filter((_, i) => i !== index);
        });
    };

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
                // width: 400,
                mx: "auto",
                cursor: "pointer",
            }}
            className="dropzone-form"
        >
            {files.length === 0 && (
                <Typography>Drag & Drop files here or click to browse</Typography>
            )}

            {files.length > 0 && (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
                    {files.map((f, i) => (
                        <Box
                            key={i}
                            sx={{
                                position: "relative",
                                width: 100,
                                height: 100,
                                border: "1px solid grey",
                                borderRadius: 2,
                                overflow: "hidden",
                            }}
                        >
                            {f.preview ? (
                                <img
                                    src={f.preview}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            ) : (
                                <PictureAsPdfIcon fontSize="large" color="error" sx={{ width: "100%", height: "100%" }} />
                            )}

                            <IconButton
                                size="small"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemove(i);
                                }}
                                sx={{ position: "absolute", top: 0, right: 0, bgcolor: "rgba(255,255,255,0.7)" }}
                            >
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </Box>
                    ))}
                </Box>
            )}

            <input
                ref={inputRef}
                type="file"
                multiple
                style={{ display: "none" }}
                onChange={(e) => {
                    if (!e.target.files) return;
                    handleFileSelect(e.target.files);
                }}
            />
        </Box>
    );
}