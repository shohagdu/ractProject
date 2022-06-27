export default function GridMain({children}){
    return (
        <div className="sm:grid grid-cols-4 gap-10 py-10">
            {children}
        </div>
    );
}