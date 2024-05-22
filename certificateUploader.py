import tkinter as tk
from tkinter import filedialog, messagebox
import json
import os

class AchievementApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Achievement Manager")

        self.achievements = []
        self.load_achievements()

        self.name_var = tk.StringVar()
        self.position_var = tk.StringVar()
        self.description_var = tk.StringVar()
        self.image_var = tk.StringVar()

        tk.Label(root, text="Name").grid(row=0, column=0, padx=10, pady=10)
        tk.Entry(root, textvariable=self.name_var).grid(row=0, column=1, padx=10, pady=10)

        tk.Label(root, text="Position").grid(row=1, column=0, padx=10, pady=10)
        tk.Entry(root, textvariable=self.position_var).grid(row=1, column=1, padx=10, pady=10)

        tk.Label(root, text="Description").grid(row=2, column=0, padx=10, pady=10)
        tk.Entry(root, textvariable=self.description_var).grid(row=2, column=1, padx=10, pady=10)

        tk.Label(root, text="Image Path").grid(row=3, column=0, padx=10, pady=10)
        tk.Entry(root, textvariable=self.image_var).grid(row=3, column=1, padx=10, pady=10)
        tk.Button(root, text="Browse", command=self.browse_image).grid(row=3, column=2, padx=10, pady=10)

        tk.Button(root, text="Add Achievement", command=self.add_achievement).grid(row=4, column=1, padx=10, pady=10)

    def browse_image(self):
        file_path = filedialog.askopenfilename(filetypes=[("Image files", "*.jpg *.jpeg *.png")])
        if file_path:
            self.image_var.set(file_path)

    def add_achievement(self):
        name = self.name_var.get()
        position = self.position_var.get()
        description = self.description_var.get()
        image = self.image_var.get()

        if not name or not position or not description or not image:
            messagebox.showwarning("Input Error", "All fields are required!")
            return

        self.achievements.append({
            "name": name,
            "position": position,
            "description": description,
            "image": image
        })

        self.save_achievements()
        messagebox.showinfo("Success", "Achievement added successfully!")

        self.name_var.set("")
        self.position_var.set("")
        self.description_var.set("")
        self.image_var.set("")

    def load_achievements(self):
        if os.path.exists('achievements.json'):
            with open('achievements.json', 'r') as file:
                self.achievements = json.load(file)["achievements"]

    def save_achievements(self):
        with open('achievements.json', 'w') as file:
            json.dump({"achievements": self.achievements}, file, indent=4)

if __name__ == "__main__":
    root = tk.Tk()
    app = AchievementApp(root)
    root.mainloop()