import {neon} from '@neondatabase/serverless'

const sql = neon(`${process.env.DATABASE_URL}`);

export default sql;

/* To store AI generated content data we use NEON 
NEON is fully managed serverless postgreSQL database built for modern application
NEON helps developers to build reliable and scalable apps faster
NEON come with powerful features like branching , auto scaling that simplifies the development and management*/