import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
        <div className='md:w-10/12 mx-auto md:my-16'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cars ToyTopia/Blog</title>
            </Helmet>
            <div>

                <div>
                    <div className='md:w-10/12 mx-auto md:my-16 space-y-4'>
                        <div className='md:py-6 bg-orange-100 p-4'>
                            <h1 className='text-orange-500 text-3xl'>Question1:  What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                            <p className='md:py-4'><span className='font-bold'>Access Token: </span> An access token is a credential that represents the authorization granted to a user. It typically has a limited lifespan and is used to access protected resources or perform authenticated actions on behalf of the user. Access tokens are commonly used in stateless authentication systems like JSON Web Tokens (JWTs). They are usually included in the headers or requests to the server for authorization.</p><br />
                            <p><span className='font-bold'>Refresh Token: </span> A refresh token is a long-lived credential that is used to obtain a new access token when the current access token expires. It is typically issued alongside the access token during the authentication process. When the access token expires, the refresh token is sent to the server to request a new access token without requiring the user to log in again. Refresh tokens are more secure as they are long-lived and can be revoked if needed.</p>
                        </div>
                        <div className='md:py-3 bg-orange-100 p-4'>
                            <h1 className='text-orange-500 text-3xl'>Question2: Compare SQL and NoSQL databases?</h1>
                            <p className='md:py-4'><span className='font-bold'>SQL Databases: </span>
                                (i) Structure: SQL databases use a structured data model based on tables with predefined schemas. Data is organized into rows and columns, and relationships between tables are established using keys (primary and foreign keys).
                                (ii) Schema: SQL databases have a fixed schema, meaning the structure of the data must be defined before data insertion. Altering the schema can be complex and may require modifying existing data.
                                (iii) Query Language: SQL databases use the SQL query language for defining and manipulating the data. SQL provides a standardized way to retrieve, insert, update, and delete data.</p><br />
                            <p>
                                <span className='font-bold'>NoSQL Databases: </span>
                                (i)Structure: NoSQL databases use various data models, such as key-value, document, columnar, or graph-based. They offer flexible schemas, allowing dynamic and unstructured data storage.
                                (ii)Schema: NoSQL databases are schema-less, allowing developers to add new fields or change the structure of data on the fly without affecting existing data.
                                (iii)Query Language: NoSQL databases often provide query interfaces specific to their data model. While some support SQL-like querying, others use custom APIs or object-oriented approaches.
                            </p>
                        </div>
                        <div className='md:py-3 bg-orange-100 p-4'>
                            <h1 className='text-orange-500 text-3xl'>What is express js? What is Nest JS ?</h1>
                            <p className='md:py-4'><span className='font-bold'>Express JS: </span>Express.js is a popular web application framework for Node.js, a JavaScript runtime environment. It provides a robust set of features and tools for building web applications and APIs. </p><br></br>
                            <p><span className='font-bold'>Nest JS: </span> NestJS is a progressive, efficient, and extensible framework for building scalable and maintainable server-side applications. It is built with TypeScript and uses modern JavaScript features to provide a structured and robust development environment.</p>
                        </div>
                        <div className='md:py-6 bg-orange-100 p-4'>
                            <h1 className='text-orange-500 text-3xl'>What is MongoDB aggregate and how does it work?</h1>
                            <p className='md:py-4'>In MongoDB, the aggregate framework is a powerful tool for performing advanced data analysis and manipulation operations on collections. It allows you to process data using a pipeline of stages, where each stage performs a specific operation on the input data and passes the results to the next stage.</p><br />
                            <p>Here's how the MongoDB aggregate framework works:</p><br />
                            <p><span className='font-bold'>(i) </span>Pipeline Stages: The aggregate pipeline consists of one or more stages, each responsible for performing a specific operation on the data. Common stages include $match, $group, $sort, $project, $limit, $skip, and many more. These stages are combined in a specific order to transform and analyze the data.
                            </p><br/>
                            <p><span className='font-bold'>(ii)</span>Data Processing: Each stage in the pipeline takes the input documents, processes them according to the specified operation, and produces output documents. The output of one stage becomes the input for the next stage, creating a chain of data transformations.
                            </p>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default Blog;