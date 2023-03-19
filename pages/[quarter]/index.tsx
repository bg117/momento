import { useRouter } from "next/router";
import Page from "../../components/page";
import { ListGroup } from "react-bootstrap";
import React from "react";
import Link from "next/link";
import useSWR from "swr"

type Subject = {
  id: number;
  name: string;
}

export default function Id() {
  const { quarter } = useRouter().query;
  const id = quarter as unknown as number;
  const fetcher = () => fetch(`/api/subjects?quarter=${id}`).then((res) => res.json());

  const { data, error } = useSWR("/api/subjects", fetcher);
  const subjects = data as Subject[];

  // while loading
  if (!subjects) {
    return (
      <Page>
        Loading...
      </Page>
    );
  }

  // if error
  if (error) {
    return (
      <Page>
        Error
      </Page>
    );
  }

  if (id < 1 || id > 4) {
    return (
      <Page>
        <h1>Page not found</h1>
      </Page>
    );
  }

  const cardinals = ["", "st", "nd", "rd", "th"];

  return (
    <Page>
      <h1>{quarter + cardinals[id]} Quarter Subjects</h1>
      <ListGroup>
        {subjects.map((subject) => (
          <ListGroup.Item key={subject.id}>
            <Link href={`/subjects/${subject.id}`}>{subject.name}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Page>
  );
}
