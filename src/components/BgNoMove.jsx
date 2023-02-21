const BgNoMove = ({tema}) => {
    return (
        <div className={`bg-body ${tema === 'dark' ? 'dark' : 'light'}`}></div>
    )
}

export default BgNoMove