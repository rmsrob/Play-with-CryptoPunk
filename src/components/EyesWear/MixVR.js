import { PixelBlock } from '../Styled.js';

const MixVR = (props) => {

    const f = props.f;
    const i = props.i;
    const k = props.k;

    const VRshade1 = [
        '12-9','12-10','12-11','12-12','12-13','12-14','12-15','12-16','12-17',
        '13-8','13-18',
        '14-7','14-10','14-11','14-12','14-13','14-14','14-15','14-16','14-18',
        '15-7','15-10','15-11','15-12','15-13','15-14','15-15','15-16','15-18',
        '16-8','16-18',
        '17-9','17-10','17-11','17-12','17-13','17-14','17-15','17-16','17-17',
    ]
    const VRshade2 = [
        '13-9','13-17',
        '14-8',
        '15-8',
        '16-9','16-17'
    ]

    const VRshade3 = [
        '13-10','13-11','13-12','13-13','13-14','13-15','13-16',
        '14-9','14-17',
        '15-9','15-17',
        '16-10','16-11','16-12','16-13','16-14','16-15','16-16',
    ]

    return(
    <>
    {f.includes('vr') && (
        <>
            {VRshade1.includes(`${i}-${k}`) && <PixelBlock color="black" />}
            {VRshade2.includes(`${i}-${k}`) && <PixelBlock color="#8e8e8e" />}
            {VRshade3.includes(`${i}-${k}`) && <PixelBlock color="#b5b5b5" />}
        </>
        )}
    </>
    )
}

export default MixVR;