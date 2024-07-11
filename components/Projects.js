"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/kayzou/repos?sort=created&per_page=9"
        );
        setRepos(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the repositories:", error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <SectionWrapper>
        <Heading>Projects</Heading>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="p-4 border dark:border-amber-500 rounded-lg"
            >
              <h3 className="text-xl font-semibold">{repo.name}</h3>
              <p className="text-md text-gray-500 mt-2">{repo.description}</p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-4 inline-block"
              >
                View Repository
              </a>
            </div>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
};

export default Projects;
