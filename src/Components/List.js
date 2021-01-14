const Language = [
    'Java',
    'C++',
    'PHP'
];

export const List = () => {
    return(
        <div>
        
        
        {
            Language.map((lang,index) => {
                return <div key={index}>{ lang }</div>
            })
        }
        </div>
    )
}