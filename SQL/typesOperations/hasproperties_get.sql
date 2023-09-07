CREATE PROCEDURE `typesofoperationshasproperties_get`(
	IN iIdProperty INT
)
BEGIN
	-- Declaramos variables a usar
	DECLARE vValid INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
    -- Validar la sesion según el token y el usuario ingresado.    
  
		SELECT top.TypesOfOperations_idTypesOfOperations as id, too.name, too.description 
		FROM typesofoperationshasproperties top 
        INNER JOIN typesofoperations too ON too.idTypesOfOperations = top.TypesOfOperations_idTypesOfOperations
		WHERE top.Properties_idProperties = iIdProperty;
		SET oRes = 1;
		SET oMessage = 'Get data successfully';
	
    SELECT oRes as success, oMessage as message;
END