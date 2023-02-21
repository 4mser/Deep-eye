const BgNoMove = ({theme}) => {
    return (
        <div className={`bg-body ${theme === 'dark' ? 'dark' : 'light'}`}></div>
    )
}

export default BgNoMove