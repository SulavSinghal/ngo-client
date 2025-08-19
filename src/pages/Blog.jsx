import HeroSection from '../components/Blog/HeroSection';
import BlogFilterBar from '../components/Blog/BlogFilter';
// import Featured from '../components/Blog/Featured';
import Blogpage from '../components/Blog/BlogPage';
function BlogPage(){
    return (
        <div>
            <HeroSection />
            <BlogFilterBar />
            {/* <Featured />*/}
            <BlogPage /> 
        </div>
    );
}
export default BlogPage;