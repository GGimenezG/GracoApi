CREATE PROCEDURE `typesofoperationshasproperties_manage`(
	IN iIdProperty INT,
    IN iAddTypes text,
    IN iDeleteTypes text,
	IN iToken VARCHAR(45),
    IN iUser VARCHAR(45)
)
BEGIN
	-- Declaramos variables a usar
	DECLARE vValid INT;
    DECLARE vValidType INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
  
	IF iAddTypes != '' THEN
		SET @myArrayOfTypes = iAddTypes;
        
		WHILE (LOCATE(',', @myArrayOfTypes) > 0)
		DO
			SET @value = CONVERT(ELT(1, @myArrayOfTypes), SIGNED INTEGER);
			SET @myArrayOfTypes = SUBSTRING(@myArrayOfTypes, LOCATE(',',@myArrayOfTypes) + 1);
			
			SELECT COUNT(*)
			INTO vValidType 
			FROM typesofoperations r 
			WHERE r.idTypesOfOperations = @value;
			IF vValidType > 0 THEN
				INSERT INTO `typesofoperationshasproperties`
				(
				`TypesOfOperations_idTypesOfOperations`,
				`Properties_idProperties`)
				VALUES
				(
				@value,
				iIdProperty);
			ELSE 
				SET oRes = 0;
				SET oMessage = 'Invalid record Id';
			END IF;
		END WHILE;
        SET oRes = 1;
		SET oMessage = 'Record added successfully';
	END IF;
    
    IF iDeleteTypes != '' THEN
    SELECT iDeleteTypes;
		DELETE FROM typesofoperationshasproperties 
		WHERE FIND_IN_SET(CONVERT(TypesOfOperations_idTypesOfOperations, CHAR), iDeleteTypes) AND Properties_idProperties = iIdProperty;
    END IF;

    SELECT oRes as success, oMessage as message;
    
END