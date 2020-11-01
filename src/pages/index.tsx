// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/layout"

type DataProps = {
  allContentfulPlanDefinition: {
    edges: ContentfulNode[]
  }
}

type ContentfulNode = {
  node: {
    description: {
      description: string;
    },
    title: string;
    id: string;
  }
}

const CoachingList: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <div className="coaching-list-container" style={{
      boxSizing: "border-box",
      display: "flex",
      flex: "0 1 auto",
      flexFlow: "row wrap",
      backgroundColor: "rgb(255, 255, 255)",
      borderStyle: "solid",
      borderColor: "rgb(227, 236, 238)",
      borderImage: "initial",
      borderWidth: "1px 0px 0px 1px",
      marginLeft: "0px",
      marginRight: "0px",
    }}>

    {data.allContentfulPlanDefinition.edges.map(({ node: { description: { description }, title, id } }, index ) => (
        // index === 0 || index % 3 === 0 ?
        <div key={`coaching-item-containe-${index}`} className="coaching-item-container" style={{
          borderStyle: "solid",
          borderColor: "rgb(227, 236, 238)",
          borderImage: "initial",
          borderWidth: "0px 1px 1px 0px",
          minWidth: "30%",
          flexGrow: 1,
          flexBasis: "0px",
          maxWidth: "100%"
        }}>
          <CoachingCard key={index} description={description} title={title} id={id} />
        </div>
    ))}
    </div>
  </Layout>
)

export default CoachingList


interface Props {
  id: string;
  title: string;
  description: string;
}
const CoachingCard: React.FC<Props> = ({ id, title, description }) => (
  <div className="coaching-item" style={{
    padding: "2em"
  }}>
  <div className="coaching-content-container" style={{
    margin: 0,
    flex: "1 21%",
    display: "flex",
    flexFlow:" column nowrap",
    width: "auto",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%"
  }}
  key={id}>
    <h2 style={{
      flex: "0 0 auto"
    }}>{title}</h2>
    <div style={{
      flex: "1 1 auto"
    }}>
        <div>{description}</div>
        <div style={{
            marginTop: "1rem",
            flex: "0 0 auto",
            boxSizing: "border-box"
        }}>
          <div style={{
            display: "inline-block",
            margin: "1rem 1rem 0px 0px",
            boxSizing: "border-box"
          }}>
            <Link to={`?id=${id}`} aria-label="Lue lisää Liikuntaohjelma terveysliikkujille">
              <span style={{
                fontFamily: "Santral",
                display: "inline-block",
                minWidth: "11.25rem",
                padding: "0.7rem 1.875rem 0.5625rem",
                borderRadius: "1.5em",
                fontSize:" 0.875rem",
                fontWeight: 600,
                letterSpacing:" 0.05em",
                minHeight: "2.625rem",
                textAlign: "center",
                textDecoration: "none",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.15s ease 0s",
                border: "none",
                outline: "none",
                boxShadow: "rgb(0, 102, 161) 0px 0px 0px 2px",
                background: "rgb(255, 255, 255)",
                color: "rgb(0, 102, 161)"
            }}>
                <span style={{
                  fontFamily: "Santral",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textAlign: "center",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  color: "rgb(0, 102, 161)"
                }}>Lue lisää</span>
                </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
)

export const query = graphql`
query ContentFulPlanDefinitions($locale: String) {
    allContentfulPlanDefinition(filter: {node_locale: {eq: $locale}}) {
      edges {
        node {
          id,
          description {
            description
          },
          title
        }
      }
    }
  }
`

