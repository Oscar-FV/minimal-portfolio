import myCV from"../../assets/files/CV-OscarFlores.pdf" 

export const downloadCV = ( () => {

    const a = document.createElement('a');
    a.href = myCV;
    a.download = 'CV-OscarFlores.pdf';
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
});