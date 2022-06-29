import { useParams } from 'react-router-dom';
import { Video } from '../../components/Video';
import Header from '../../layout/Header';
import Sidebar from '../../layout/Sidebar';

function Event() {
    const { slug } = useParams<{ slug: string }>();
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                {slug ? <Video lessonSlug={slug} /> : <div className="flex-1 " />}
                <Sidebar />
            </main>
        </div>
    );
}

export default Event;
