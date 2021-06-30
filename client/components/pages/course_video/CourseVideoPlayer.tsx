import { useCallback, useEffect, useState } from 'react'
import videojs from 'video.js'
import hotkeys from 'videojs-hotkeys'

const CourseVideoPlayer = ({ src }) => {
    const [videoEl, setVideoEl] = useState(null)
    const onVideo = useCallback((el) => {
        setVideoEl(el)
    }, [])


    const [videoOptions, ] = useState({
        autoplay: false,
        controls: true,
        poster: "pictures/courses/card_picture.png",
        playbackRates: [0.5, 1, 1.5, 2, 2.5],
        aspectRatio: "16:9",
        responsive: true,
        nativeControlsForTouch: true,
        plugins: {
            hotkeys
        },
        source: [
            {
                src: `${src}`
            },
        ],
    })


    useEffect(() => {
        if (videoEl == null) return;
        const player = videojs(videoEl, videoOptions);

        return () => {
            player.dispose()
        }
    }, [videoOptions, videoEl])

    return (
        <>
            <div className='course_video_player_container' >
                <div data-vjs-player>
                    <video preload="auto" ref={onVideo} className="video-js vjs-default-skin course_video_player" playsInline>
                        {/* <source src={`${src}`} type="video/mp4" /> */}
                    </video>
                </div>
            </div>
        </>
    )
}

export default CourseVideoPlayer