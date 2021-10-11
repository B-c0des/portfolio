import React, { Suspense } from 'react';
import Lottie from 'react-lottie';
import Loading from './Loading'

const GreetingLottie = ({animationData}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
      };
    
    return (
        <Suspense fallback={<Loading />}>
          {/* To override default onClick pause by Lottie */}
          <div onClick={() => null}>
            <Lottie style={{filter: "drop-shadow(-300px 100px 140px black)", filter: 'drop-shadow(white -200px -200px 140px)'}}
              options={defaultOptions}
            />
          </div>
        </Suspense>
    )
}
 
export default GreetingLottie;
