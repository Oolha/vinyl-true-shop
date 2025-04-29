import About from "@/components/home/About/About";
import Hero from "@/components/home/Hero/Hero";
import Reviews from "@/components/home/Reviews/Reviews";
import Container from "@/components/ui/Container/Container";

export default function Home() {
  return (
    <>
      <Container>
        <Hero />
        {/* <Reviews />
        <About /> */}
      </Container>
    </>
  );
}
