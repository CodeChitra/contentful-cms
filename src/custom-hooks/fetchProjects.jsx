import { createClient } from "contentful";
import { useState, useEffect } from "react";
const client = createClient({
    space: "jnpq8kixln6j",
    environment: "master",
    accessToken: import.meta.env.VITE_API_KEY
});


const useFetchProjects = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const getData = async () => {
        try {
            const response = await client.getEntries({
                content_type: "projects"
            })

            const { items } = response;
            const newProject = {};
            for (let item of items) {
                const { fields, sys } = item;
                const { fields: {
                    file: {
                        url: image
                    }
                } } = fields.image;
                newProject.id = sys.id;
                newProject.title = fields.title;
                newProject.url = fields.url;
                newProject.image = image;
                setProjects(prev => [...prev, { ...newProject }]);
            }

            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
    }, [])

    return { isLoading, projects };
}

export default useFetchProjects;