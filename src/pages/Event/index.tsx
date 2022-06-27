import Video from '../../components/Video';
import Header from '../../layout/Header';
import Sidebar from '../../layout/Sidebar';

function Event() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                <Video />
                <Sidebar />
            </main>
        </div>
    );
}

export default Event;
