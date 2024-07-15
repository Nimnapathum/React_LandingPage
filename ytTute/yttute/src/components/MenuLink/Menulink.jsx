import './Menulink.css'

function Menulink({linkname , url}) {
  return (
    <>
    <a href={url} className="link">
        {linkname}
    </a>
    </>
  )
}

export default Menulink