import Accordion from "../components/accordion-example/Accordion";
import AccordionItem from "../components/accordion-example/AccordionItem";

function AccordionDemoPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Accordion Demo</h2>

      <Accordion>
        <AccordionItem title="What is React?">
          <p>React is a JavaScript library for building user interfaces.</p>
        </AccordionItem>

        <AccordionItem title="What's a component?">
          <p>A component is a reusable piece of UI.</p>
        </AccordionItem>

        <AccordionItem title="What is JSX?">
          <p>JSX is a syntax extension that allows you to write HTML in JavaScript.</p>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordionDemoPage;