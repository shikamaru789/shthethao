

const VerticalDivider = ({className}: {className?: string}) => {
    return (
        <div className="vertical-divider-wrapper flex items-center">
            <div className={`vertical-divider h-20 ${className}`}></div>
        </div>
    )
}

export default VerticalDivider