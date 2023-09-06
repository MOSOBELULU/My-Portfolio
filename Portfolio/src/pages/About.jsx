

export default function About() {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'pdf-file/LULU E MOSOBE RESUME.pdf'; 
        link.download = 'Mosobe Lulu Resume'; 
        link.click();
      };
  return (
    <div>
      <h1>About Me</h1>
      <button onClick={handleDownload}></button>
    </div>
  )
}
