import tkinter as tk
from tkinter import scrolledtext, filedialog
import spacy
from spacy import displacy
from spacy.tokens import DocBin
from spacy.util import filter_spans
import json

# Load the spaCy model
nlp = spacy.load("en_core_web_lg")

# Function to process the text and display NER entities
def process_text():
    # Get the text from the text widget
    text = text_widget.get("1.0", tk.END)

    # Process the text with spaCy
    doc = nlp(text)

    # Display NER entities
    colors = {"PATHOGEN": "#F67DE3", "MEDICINE": "#7DF6D9", "MEDICALCONDITION": "#a6e22d"}
    options = {"colors": colors}
    html = displacy.render(doc, style="ent", options=options, page=True)
    
    # Update the result text widget
    result_text.config(state=tk.NORMAL)
    result_text.delete("1.0", tk.END)
    result_text.insert(tk.END, html)
    result_text.config(state=tk.DISABLED)

# Function to load training data and train the NER model
def train_ner_model():
    # Manually specify the file path
    file_path = "Desktop/Corona2.json"
    
    # Check if the file exists
    if not os.path.isfile(file_path):
        print(f"File not found: {file_path}")
        return
    
    with open(file_path, 'r') as f:
        data = json.load(f)

    training_data = []
    for example in data['examples']:
        temp_dict = {}
        temp_dict['text'] = example['content']
        temp_dict['entities'] = []
        for annotation in example['annotations']:
            start = annotation['start']
            end = annotation['end']
            label = annotation['tag_name'].upper()
            temp_dict['entities'].append((start, end, label))
        training_data.append(temp_dict)

    # Rest of the function remains the same...
def process_text():
    # Get the text from the text widget
    text = text_widget.get("1.0", tk.END)

    # Process the text with spaCy
    doc = nlp(text)

    # Print recognized entities
    if doc.ents:
        for ent in doc.ents:
            print(f"Entity: {ent.text}, Label: {ent.label_}")
    else:
        print("No entities found.")

    # Display NER entities
    colors = {"PATHOGEN": "#F67DE3", "MEDICINE": "#7DF6D9", "MEDICALCONDITION": "#a6e22d"}
    options = {"colors": colors}
    html = displacy.render(doc, style="ent", options=options, page=True)

    # Update the result text widget
    result_text.config(state=tk.NORMAL)
    result_text.delete("1.0", tk.END)
    result_text.insert(tk.END, html)
    result_text.config(state=tk.DISABLED)

# Create the main window
root = tk.Tk()
root.title("NER GUI")

# Create a text widget for input
text_widget = scrolledtext.ScrolledText(root, wrap=tk.WORD, width=50, height=10)
text_widget.grid(row=0, column=0, padx=10, pady=10)

# Create a button to process the text
process_button = tk.Button(root, text="Process Text", command=process_text)
process_button.grid(row=1, column=0, pady=5)

# Create a button to load training data and train the NER model
train_button = tk.Button(root, text="Train NER Model", command=train_ner_model)
train_button.grid(row=1, column=1, pady=5)

# Create a text widget for displaying the result
result_text = scrolledtext.ScrolledText(root, wrap=tk.WORD, width=70, height=15, state=tk.DISABLED)
result_text.grid(row=2, column=0, columnspan=2, padx=10, pady=10)

# Start the GUI main loop
root.mainloop()
