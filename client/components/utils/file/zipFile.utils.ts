export const downloadZipFileWithS3Key = async (fileKey: string) => {
    try {
        const res = await fetch(`${process.env.BACK_END_URL}/api/files/${fileKey}`, {
            method: 'GET'
        });

        const blob = await res.blob();
        const newBlob = new Blob([blob]);

        const blobUrl = window.URL.createObjectURL(newBlob);

        const link = document.createElement('a');
        link.href = blobUrl;
        link.setAttribute('download', `donwload.zip`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        // @ts-ignore
        window.URL.revokeObjectURL(blob);
    } catch (err) {
        console.log(err);
    }
}