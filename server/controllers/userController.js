import sql from "../configs/db.js"

export const getUserCreations = async (req,res)=>{
    try {
        const {userId} = req.auth();

        const creations = await sql` SELECT * FROM creations  WHERE user_id = ${userId} ORDER BY created_at DESC`; // here we store creations of particular user

        res.json({success:true , creations})

    } catch (error) {
        res.json({success:false , message: error.message})
    }
}

export const getPublishCreations = async (req,res)=>{
    try {

        const creations = await sql` SELECT * FROM creations  WHERE publish = true ORDER BY created_at DESC`; // here we store creations of particular user

        res.json({success:true , creations})

    } catch (error) {
        res.json({success:false , message: error.message})
    }
}


export const toggleLikeCreation = async (req,res)=>{
    try {
        const {userId} = req.auth();

        const {id} = req.body;

        const [creation] = await sql` SELECT * FROM creations WHERE id = ${id}`; // [creation] means expecting only a one row(Since id should be unique)

        if(!creation){
            return res.json({success:false , message:"Creation not found"})
        }

        const currentLikes = creation.likes; // currentLikes is the array of users who liked the creation.
        const userIdStr = userId.toString(); // convert userId to string (since SQL array of text[] is used) 

        let updateLikes;
        let message;

        if(currentLikes.includes(userIdStr)){
            updateLikes = currentLikes.filter((user) => user !== userIdStr)
            message = 'creation unliked'
        }else{
            updateLikes = [...currentLikes , userIdStr];
            message = 'creation liked'
        }

        // convert updateLikes array into Postgres array format. 
        // Postgres text[] expect data like this: {user1 , user2 , user3} 
        // That's why we join with ',' and wrap inside {}

        const formattedArray = `{${updateLikes.join(',')}}`;

        await sql`UPDATE creations SET likes = ${formattedArray}::text[]  WHERE id = ${id}` // ::text[] is Postgres type cast . Interpret this formattedArray as text[] array. Without ::text[], Postgres might see formattedArray as plain text , not an array
        res.json({success:true , message })

    } catch (error) {
        res.json({success:false , message: error.message})
    }
}