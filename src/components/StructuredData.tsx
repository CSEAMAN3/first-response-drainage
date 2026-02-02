type StructuredDataProps = {
  id?: string;
  data: unknown;
};

export default function StructuredData({ id, data }: StructuredDataProps) {
  return (
    <script
      {...(id ? { id } : {})}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
