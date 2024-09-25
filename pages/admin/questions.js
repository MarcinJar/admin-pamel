import Card from "@/components/card/Card";
import DefaultLayout from "@/components/layouts/defaultLayout/DefaultLayout";
import Question from "@/components/ui/question/Question";

export default function Quesions() {
  const quesions = [
    { 
      question: "Czy korzystanie z usługi jest darmowe?",
      answer: "Tak, korzystanie z usługi jest darmowe. Użytkownik ma możliwość wykupienia płatnych funkcji, ale podstawowe możliwości nie są płatne.",
    },
    { 
      question: "Jak usunąć konto?",
      answer: "Skontaktuj się z nami, wysyłając wiadomość e-mail na adres pomoc@testowaaplikacja.pl.",
    },
    { 
      question: "Gdzie kupić książkę?",
      answer: "Najlepiej w księgarni Helion.pl. ",
    },
    { 
      question: "Gdzie kupić e-booka?",
      answer: "Na stronie Ebookpoint.pl - nie ma lepszej możliwości!",
    },
    { 
      question: "Kto jest administratorem moich danych osobowych?",
      answer: "Administratorem danych osobowych jest firma Krza i K Sp. z o.o.",
    },
  ];

  return (
    <DefaultLayout title="Pytania i odpowiedzi">
      <Card className="grid grid-cols-1 gap-4">
        { quesions.map(qes => 
          <Question 
            key={qes.question} 
            question={qes.question} 
            answer={qes.answer}/>)}
      </Card>
    </DefaultLayout>
  );
}