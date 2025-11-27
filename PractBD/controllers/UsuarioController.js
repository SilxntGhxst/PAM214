import { Usuario } from '../models/usuario';
import DatabaseService from '../database/DatabaseService';

export class UsuarioController {
  constructor() {
    this.listeners = [];
  }

  async initialize() {
    await DatabaseService.initialize();
  }

  async obtenerUsuarios() {
    try {
      const data = await DatabaseService.getAll();
      // Aseguramos que data sea un array antes de mapear
      if (!Array.isArray(data)) return []; 
      return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw new Error('No se pudieron cargar los usuarios');
    }
  }

  async crearUsuario(nombre) {
    try {
      Usuario.validar(nombre);
      const nuevoUsuario = await DatabaseService.add(nombre.trim());
      this.notifyListeners();
      return new Usuario(nuevoUsuario.id, nuevoUsuario.nombre, nuevoUsuario.fecha_creacion);
    } catch (error) {
      console.error('Error al crear usuario:', error);
      throw error;
    }
  }

  // --- Método para actualizar ---
  async actualizarUsuario(id, nombre) {
    try {
      Usuario.validar(nombre); // Validamos que el nuevo nombre sea correcto
      await DatabaseService.update(id, nombre.trim());
      this.notifyListeners(); // Avisamos a la vista para que recargue
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      throw error;
    }
  }

  // --- Método para eliminar ---
  async eliminarUsuario(id) {
    try {
      await DatabaseService.delete(id);
      this.notifyListeners(); // Avisamos a la vista para que recargue
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      throw error;
    }
  }

  addListener(callback) {
    this.listeners.push(callback);
  }

  removeListener(callback) {
    this.listeners = this.listeners.filter(l => l !== callback);
  }

  notifyListeners() {
    this.listeners.forEach(callback => callback());
  }
}