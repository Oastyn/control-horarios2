from flask import Flask, request, jsonify
from datetime import datetime

app = Flask(__name__)

# Ruta para registrar los horarios
@app.route('/registro', methods=['POST'])
def registrar_horario():
    datos = request.json
    entrada = datetime.strptime(datos['entrada'], '%H:%M')
    salida = datetime.strptime(datos['salida'], '%H:%M')
    total_horas = (salida - entrada).seconds / 3600
    saldo = total_horas - 8

    return jsonify({
        'total_horas': round(total_horas, 2),
        'saldo': round(saldo, 2)
    })

if __name__ == '__main__':
    app.run(debug=True)
