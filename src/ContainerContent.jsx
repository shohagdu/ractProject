export default function ContainerContent({children}){
    return (
        <div className="md:container md:mx-auto">
            {children}
        </div>
    );
}