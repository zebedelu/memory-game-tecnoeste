from flask import Flask, render_template, jsonify, request
import pickle, os, copy, random

PICKLE_PATH = "db/leaderboard.json.pickle"

class LeadeboardDB:
    def __init__(self):
        self.LEADERBOARD = []
    def sort(self):
        self.LEADERBOARD = sorted(self.LEADERBOARD, key=lambda item: item[1], reverse=True)
    def get(self):
        self.sort()
        return copy.deepcopy(self.LEADERBOARD)
    def save_file(self):
        pickle_archive = open(PICKLE_PATH,"wb")
        print("Salvando arquivo pickle!")
        pickle.dump(self.get(), pickle_archive)
        pickle_archive.close()
        print("Salvo!")

    def save(self, nome, pontos):
        # limite de 50 caracteres por segurança
        self.LEADERBOARD.append([nome[:50], pontos])
        self.sort()
        self.save_file()

l = LeadeboardDB()

if not os.path.exists(PICKLE_PATH):
    print("Arquivo pickle não encontrado!")
    pickle_archive = open(PICKLE_PATH,"wb")
    pickle.dump(l.get(), pickle_archive)
    pickle_archive.close()
    print("pickle criado e salvo!")
else:
    print(f"Arquivo pickle existe! '{PICKLE_PATH}'")
    pickle_archive = open(PICKLE_PATH,"rb")
    l.LEADERBOARD = pickle.load(pickle_archive)
    pickle_archive.close()
    print("usando ele...")

app = Flask(__name__)

# Para poder ver o site normalmente
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/mode')
def mode():
    return render_template('chose_difficult.html')
@app.route('/game')
def game():
    return render_template('game.html')
@app.route('/endgame')
def endgame():
    return render_template('endgame.html')

# Aqui sim é a API para comunicação, e poder ver o leaderboard
@app.route("/get/leaderboard", methods=["GET"])
def get_api():
    return jsonify(l.get())

@app.route("/set/leaderboard", methods=["POST"])
def set_api():
    data = request.get_json()
    nome = data["nome"]
    pontos = data["pontos"]

    l.save(nome, pontos)

    return {"status":200}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)