interface Planos {
  planNumber: number;
}

export default function CardPlanos({ planNumber }: Planos) {
  return (
    <div className="bg-gradient-to-br from-orange-500 from-40% orange-600 to-orange-700 p-6">
      <span>Plano {planNumber}</span>
      <div></div>
      <div>
        <ul>
          <li>Banner</li>
          <li>Relação</li>
        </ul>
      </div>
      <button>Contratar agora</button>
    </div>
  );
}
