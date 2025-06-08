// Store the original project list content
let originalContent = null;

// Function to load project content
async function loadProject(projectName) {
    try {
        const response = await fetch(`projects/${projectName}.html`);
        if (!response.ok) {
            throw new Error('Project not found');
        }
        
        const content = await response.text();
        const contentDiv = document.getElementById('content');
        
        // Store original content if not already stored
        if (!originalContent) {
            originalContent = contentDiv.innerHTML;
        }
        
        // Load new content with back button
        contentDiv.innerHTML = `
            <a href="#" class="back-btn" onclick="showProjectList()">← Back to Projects</a>
            <div class="project-content">
                ${content}
            </div>
        `;
        
    } catch (error) {
        console.error('Error loading project:', error);
        document.getElementById('content').innerHTML = `
            <a href="#" class="back-btn" onclick="showProjectList()">← Back to Projects</a>
            <div class="project-content">
                <h3>Project Not Found</h3>
                <p>Sorry, this project could not be loaded. Please check back later.</p>
            </div>
        `;
    }
}

// Function to return to project list
function showProjectList() {
    if (originalContent) {
        document.getElementById('content').innerHTML = originalContent;
    }
}

// Optional: Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Add any initialization code here
    console.log('Portfolio site loaded successfully');
});