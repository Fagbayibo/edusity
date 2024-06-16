import './VideoPlayer.css'

const VideoPlayer = ({ playState, setPlayState, embedId }) => {
    return (
        <div className={`videoPlayer ${playState ? ' ' : 'hide'}`}>
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div >
    )
}

export default VideoPlayer