import { useCallback, useEffect, useState } from 'react'
import videojs from 'video.js'
import hotkeys from 'videojs-hotkeys'

const CourseVideoPlayer = (props) => {
    const [videoEl, setVideoEl] = useState(null)
    const onVideo = useCallback((el) => {
        setVideoEl(el)
    }, [])


    
    const videoJsOptions = {
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
        sources: [
          {
            src: '/Videos/hero_section_animation.mp4'
          },
        ],
      }

    useEffect(() => {
        if (videoEl == null) return
        const player = videojs(videoEl, videoJsOptions)
        
        return () => {
            player.dispose()
        }
    }, [videoJsOptions, videoEl])

    return (
        <>
            <div className='course_video_player_container' >
                <div data-vjs-player>
                    <video ref={onVideo} className="video-js course_video_player" playsInline />
                </div>
            </div>
        </>
    )
}

export default CourseVideoPlayer