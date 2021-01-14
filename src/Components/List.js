import { useEffect } from 'react';

export const List = ({ langs }) => {

useEffect(() => {
    console.log('a');

    return () => {
        console.log('a:unmount');
    }
})

    return(
        <div>
        {
            langs.map((lang, index) => {
                return <div key={index}>{ lang }</div>
            })
        }
        </div>
    )
}