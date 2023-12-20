import "../../public/files/CV - Oscar Flores Vázquez.pdf"

export const downloadCV = ( () => {

    const filePath = "../../public/files/CV - Oscar Flores Vázquez.pdf"

    const a = document.createElement('a');
    a.href = filePath;
    a.download = 'CV-OscarFlores.pdf';
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
});