import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Central Branding Manager</title>
          <meta
            property="og:title"
            content="test-page - Central Branding Manager"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_n8zwk) => (
            <>
              <h1>{context_n8zwk?.Name}</h1>
            </>
          )}
          initialData={props.contextN8zwkProp}
          persistDataDuringLoading={true}
          key={props?.contextN8zwkProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextN8zwkProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        contextN8zwkProp: contextN8zwkProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
