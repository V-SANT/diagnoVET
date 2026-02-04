# DiagnoVET - New Features and UX Improvement Analysis

This document presents the main features identified from the shared videos, along with improvement ideas and potential fixes aimed at making the user experience more fluid, intuitive, and user-friendly.

## Features

Below are several features and enhancement ideas that could be discussed and potentially implemented.

### Visually indicate incorrect or borderline weight inputs

On the first screen, when selecting the species and entering the weight, the video mentions that reference tables will be used to determine whether the weight falls within a normal range.

To better capture user attention and prevent mistakes, the application could visually highlight the weight input field:

- Display the weight inside a red-bordered or red-background field when the value is clearly below or above the normal range for the selected species.

- Use a yellow or orange highlight when the value is close to the minimum or maximum threshold, signaling a potential issue without marking it as fully incorrect.

- Optionally add a short tooltip or helper text explaining the reason for the highlight (e.g., “Weight slightly above average for this species”).

This immediate visual feedback would help users detect abnormal values early and reduce the risk of incorrect data propagating through the diagnosis process.

### Improve the “Professional in charge” search bar
The search bar used to select the responsible professional could be optimized to improve speed and usability:

- Display professionals sorted alphabetically by default.

- Support partial and fuzzy search for both first name and surname.

- Optionally highlight matching characters in search results to reinforce feedback.

These changes would reduce friction, especially in clinics with many registered professionals.

### Enhance the image visualizer to support different user workflows
The current image visualizer could be expanded to better accommodate different user preferences and diagnostic workflows. Allowing users to switch between these modes would make image review more flexible and efficient.

Possible visualization modes include:

#### Grid view
Similar to the current implementation, allowing quick scanning of all images.

#### Single-image focus mode
Displays one image at a time, with left/right navigation and pinch or scroll zoom for detailed inspection.

#### List view (file-based)
A textual list showing file names, upload dates, or image types, useful for experienced users who rely on structured data rather than thumbnails.

### Add contextual help in the diagnosis section
A contextual help button next to the “Diagnóstico” and “Hallazgos” titles could significantly improve onboarding for new users.
This help could explain:

- That the AI agent can infer conclusions based on both uploaded images and written clinical data.

- hat the “Mostrar cambios” toggle highlights or reveals content that has been modified or suggested by the AI agent.

- Any limitations or best practices when accepting AI-generated suggestions.

This reduces confusion and builds trust in AI-assisted features.

### Allow the use of diagnosis templates
One of the most valuable opportunities for improvement is the introduction of diagnosis templates.

Benefits include:

- Faster report creation without rewriting common structures repeatedly.

- More consistent diagnostic language across professionals.

- Reduced cognitive load during busy clinical workflows.

Suggested functionality:

- A “Use Template” option when creating or editing a diagnosis.
- A “New Template” button available both:

    - In the configuration/settings area.

    - Directly from the patient or diagnosis editing screen.

Templates could include placeholders (e.g., species, age, findings) that the vet can fill with real data.