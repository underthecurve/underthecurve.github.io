<script>
	import Project from "$lib/Project.svelte";
    import './page.css'

    export let data;

    const news = data.projects.filter(d => d.section === 'news');
    const newsDataGraphics = news.filter(d => d.subsection === 'data and graphics');
    const newsWords = news.filter(d => d.subsection === 'words');
    const newsEditing = news.filter(d => d.subsection === 'editing');

    const opinion = data.projects.filter(d => d.section === 'opinion');
    const others = data.projects.filter(d => d.section === 'other');
</script>

<main>
    <h1>CHRISTINE Y. ZHANG</h1>
    <p>I am an <a href="https://www.nytimes.com/by/christine-zhang">editing resident</a> in the graphics department at <b>The New York Times</b>. Previously, I was a data and graphics journalist at the <b>Financial Times</b>, the <b>Baltimore Sun</b> and the <b>Los Angeles Times</b>, and a research analyst at the <b>Brookings Institution</b>.</p>
    <p>You can download my résumé <b><a href="czhang_resume_2023.pdf">here</a></b>.</p>
    <p>Some of my work:</p>

    <div class="projects">
        <div class="section news">
            <div class="subsection">
                <h2>Data and graphics</h2>
                {#each newsDataGraphics as project}
                    <Project {project} />
                {/each}
            </div>
            <div class="subsection">
                <h2>Words</h2>
                {#each newsWords as project}
                    <Project {project} />
                {/each}
            </div>
            <div class="subsection">
                <h2>Editing</h2>
                {#each newsEditing as project}
                    <Project {project} />
                {/each}
            </div>
        </div>

        <div class="section opinion">
            <h2>Opinion</h2>

            {#each opinion as project}
                <Project {project} />
            {/each}
        </div>

        <div class="section others">
            <h2>Other</h2>

            {#each others as project}
                <Project {project} />
            {/each}
        </div>
    </div>
</main>

<style>
    main {
        font-family: var(--font-sans);
        line-height: 1.4;
        max-width: 600px;
        margin: 1rem auto;
    }
    h1 {
        /* text-align: center; */
        font-size: 1.75rem;
        margin-bottom: 14px;
    }
    h2 {
        text-align: center;
        font-size: 1.35rem;
        margin-top: 0;
        margin-bottom: 14px;
    }
    p {
        margin-top: 0;
    }
</style>