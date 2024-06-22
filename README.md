## every functionalities used needs to be writen here

# Navbar

- Navbar implemented
- Navbar styling using classnames pkg (it makes conditional styling very easy)

# Setting up Database-mysql

- Seting up prisma,configuring .env database-url
- datagrid configured and db is working correctly connection tested-ok
- prisma client is working
- post request created app>api>issues>route.tsx,zod used,thnuderclient or postman

# Settings up Daisy ui

- daisy ui is working

# Creating ui of issue page

- issue page created with daisyui
- created new issue page and added markdown editor

# Handeled for submission

- data stored in db used simple fetch to hit post request and useRouter hook to redirect to previous page

# Displayed all issues from db to issue page

-   const data = await prisma.issue.findMany(); just this much code to retrive data from database and do whatever you want to do with that data

# added skeleton

-   added skeleton loading in loading.tsx and used npm pkg react-loading-skeleton to do so this pkg makes it very easy to implement skeleton loading in any app.


# created [id] to get id od the clicked issue 
-   added [id] folder and fetch unique data form DB using prisma
-   added page.tsx in id and seperate loading for that page

# Created IssueBadge component to optimize our code and make it readable
-   app/components/issuebadge is created and it takes props as string 

# Styled ViewIssueDetailsPage page
-   added style to this page