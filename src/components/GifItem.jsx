import '../styles.css'

export const GifItem = ({title, url, id}) => {

    return (
        <div className="card">
            <img src={url} alt={title} />
            <p className="title">{title}</p>
        </div>
    )
}
